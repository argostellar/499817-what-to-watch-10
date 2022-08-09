import { MouseEvent, ChangeEvent, useState } from 'react';

type ReviewAddFormProps = {
  someProp?: string;
}

type ReviewFormState = {
  rating: string;
  reviewText: string;
}

function ReviewAddForm({someProp}: ReviewAddFormProps): JSX.Element {
  const [formState, setFormState] = useState<ReviewFormState>({
    rating: '8',
    reviewText: '',
  });

  const handleRadioChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    // evt.preventDefault();
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

  const handleFormSubmit = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    // console.log(formState);
  };

  /*#TODO Убрать после задействования состояния */
  const formStateString = `Rating: ${formState.rating}; Text: ${formState.reviewText};`;

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          <input className="rating__input" onChange={handleRadioChange} id="star-10" type="radio" name="rating" value="10" />
          <label className="rating__label" htmlFor="star-10">Rating 10</label>

          <input className="rating__input" onChange={handleRadioChange} id="star-9" type="radio" name="rating" value="9" />
          <label className="rating__label" htmlFor="star-9">Rating 9</label>

          <input className="rating__input" onChange={handleRadioChange} id="star-8" type="radio" name="rating" value="8" defaultChecked />
          <label className="rating__label" htmlFor="star-8">Rating 8</label>

          <input className="rating__input" onChange={handleRadioChange} id="star-7" type="radio" name="rating" value="7" />
          <label className="rating__label" htmlFor="star-7">Rating 7</label>

          <input className="rating__input" onChange={handleRadioChange} id="star-6" type="radio" name="rating" value="6" />
          <label className="rating__label" htmlFor="star-6">Rating 6</label>

          <input className="rating__input" onChange={handleRadioChange} id="star-5" type="radio" name="rating" value="5" />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>

          <input className="rating__input" onChange={handleRadioChange} id="star-4" type="radio" name="rating" value="4" />
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input className="rating__input" onChange={handleRadioChange} id="star-3" type="radio" name="rating" value="3" />
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input className="rating__input" onChange={handleRadioChange} id="star-2" type="radio" name="rating" value="2" />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input className="rating__input" onChange={handleRadioChange} id="star-1" type="radio" name="rating" value="1" />
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" onChange={handleTextAreaChange} name="review-text" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" onClick={handleFormSubmit} type="submit">Post</button>
        </div>

      </div>
      <pre>{formStateString}</pre>
    </form>
  );
}

export default ReviewAddForm;
