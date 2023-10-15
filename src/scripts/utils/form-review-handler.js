import RestaurantSource from '../data/restaurant-source';

const FormReviewHandler = {
  init({ formElement, id, reviewSubmittedCallback }) {
    this._formElement = formElement;
    this._id = id;
    this._reviewSubmittedCallback = reviewSubmittedCallback;

    this._formElement.addEventListener('submit', async (event) => {
      event.preventDefault();
      this._validateDataForm();
    });
  },

  _validateDataForm() {
    const nameInput = this._formElement.querySelector('#name');
    const reviewInput = this._formElement.querySelector('#review__text');

    if (nameInput.value || reviewInput.value) {
      const reviewData = {
        id: this._id,
        name: nameInput.value,
        review: reviewInput.value,
      };
      this._submitReview(reviewData);
    } else {
      this._errorHandler('Form belum terisi, pastikan telah terisi semua.');
    }
  },

  _errorHandler(errorMessage) {
    alert(errorMessage);
  },

  async _submitReview(reviewData) {
    try {
      const response = await RestaurantSource.sendReview(reviewData);
      if (!response.error) {
        this._reviewSubmittedCallback();
        this._successHandler('Ulasan berhasil dikirim!');
      } else {
        this._errorHandler('Gagal mengirim ulasan.');
      }
    } catch (error) {
      this._errorHandler(`Terjadi kesalahan: ${error.message}`);
    }
  },

  _successHandler(successMessage) {
    alert(successMessage);
    this._formElement.reset();
  },
};

export default FormReviewHandler;