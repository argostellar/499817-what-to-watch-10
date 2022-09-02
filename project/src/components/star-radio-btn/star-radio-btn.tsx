import { ChangeEvent } from 'react';

type StarRadioBtnProps = {
  ratingValue: number;
  currentRating: string;
  isLocked: boolean;
  handleRadioChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
};

function StarRadioBtn({ ratingValue, currentRating, isLocked, handleRadioChange }: StarRadioBtnProps): JSX.Element {
  const isDefault = ratingValue.toString() === currentRating;
  return (
    <>
      <input
        className="rating__input"
        onChange={handleRadioChange}
        id={`star-${ratingValue}`}
        type="radio"
        name="rating"
        value={ratingValue}
        defaultChecked={isDefault}
        disabled={isLocked}
        required
      />
      <label
        className="rating__label"
        htmlFor={`star-${ratingValue}`}
        title={ratingValue.toString()}
      >
        Rating {ratingValue}
      </label>
    </>
  );
}

export default StarRadioBtn;
