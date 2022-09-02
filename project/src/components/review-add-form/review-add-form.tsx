import { ChangeEvent, useState, useRef, FormEvent, useEffect } from 'react';
import { ReviewRating, ReviewTextareaSize } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addCommentAction } from '../../store/api-actions';
import { UserComment } from '../../types/user-comment';
import StarRadioBtn from '../star-radio-btn/star-radio-btn';

type ReviewFormState = {
  rating: string;
  reviewText: string;
  isFormLocked: boolean;
  isBtnLocked: boolean;
}

function ReviewAddForm(): JSX.Element {
  const formRef = useRef<HTMLFormElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const dispatch = useAppDispatch();
  const { isDataSended } = useAppSelector((state) => state);
  const rating = useAppSelector((state) => Math.trunc(state.currentFilm.rating));

  const correctRating = rating !== ReviewRating.NONE ? rating.toString() : ReviewRating.MIN.toString();

  const [formState, setFormState] = useState<ReviewFormState>({
    rating: !isNaN(rating) ? correctRating : ReviewRating.DEFAULT.toString(),
    reviewText: '',
    isFormLocked: false,
    isBtnLocked: true,
  });

  const textareaValue = textareaRef.current?.value;

  useEffect(() => {
    unlockBtnCondition ?
      setFormState((prevState) => ({
        ...prevState,
        isBtnLocked: false,
      }))
      :
      setFormState((prevState) => ({
        ...prevState,
        isBtnLocked: true,
      }));
  }, [textareaValue]);

  useEffect(() => {
    setFormState((prevState) => ({
      ...prevState,
      isFormLocked: !isDataSended,
    }));
  }, [isDataSended]);

  const unlockBtnCondition = formState.reviewText.length >= ReviewTextareaSize.MIN && formState.reviewText.length <= ReviewTextareaSize.MAX;

  const handleRadioChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setFormState((prevState) => ({
      ...prevState,
      rating: value,
    }));
  };

  const handleTextAreaChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = target;
    setFormState((prevState) => ({
      ...prevState,
      reviewText: value,
    }));
  };

  const onSubmit = (userComment: UserComment) => {
    dispatch(addCommentAction(userComment));
  };

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (formRef.current !== null) {
      const comment = new FormData(formRef.current).get('review-text') as string;
      const score = new FormData(formRef.current).get('rating') as string;
      onSubmit({
        comment: comment,
        rating: Number(score),
      });
    }
  };

  const generateRadioBtns = () => {
    const protoStars = Array.from({ length: ReviewRating.MAX }, () => ReviewRating.MIN);
    return protoStars.map((_item, index, array) => {
      const currentNumber = array.length - index;
      return (
        <StarRadioBtn
          ratingValue={currentNumber}
          handleRadioChange={handleRadioChange}
          currentRating={formState.rating}
          isLocked={formState.isFormLocked}
          key={currentNumber}
        />
      );
    });
  };

  return (
    <form
      ref={formRef}
      action="#"
      className="add-review__form"
      onSubmit={handleFormSubmit}
    >
      <div className="rating">
        <div className="rating__stars">
          {generateRadioBtns()}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          ref={textareaRef}
          className="add-review__textarea"
          onChange={handleTextAreaChange}
          name="review-text"
          id="review-text"
          placeholder="Review text"
          minLength={ReviewTextareaSize.MIN}
          maxLength={ReviewTextareaSize.MAX}
          disabled={formState.isFormLocked}
          value={formState.reviewText}
          required
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={formState.isBtnLocked || formState.isFormLocked}
          >
            Post
          </button>
        </div>

      </div>
    </form>
  );
}

export default ReviewAddForm;
