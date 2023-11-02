Feature('Adding Review');

Before(({ I }) => {
  I.amOnPage('/');

  I.seeElement('.item__name a');

  I.click(locate('.item__name a').first());

  I.seeElement('#addReview');
});

Scenario('Adding a valid review', ({ I }) => {
  const name = 'Kris';
  const text = 'Ulasan saya tentang restoran ini sangat bagus.';
  I.fillField('name', name);
  I.fillField('review__text', text);

  I.click('Kirim Ulasan');

  I.seeInPopup('Ulasan berhasil dikirim!');
  I.acceptPopup();
});

Scenario('Adding a invalid review', ({ I }) => {
  I.fillField('name', 'Jo');
  I.fillField('review__text', 'ul');

  I.click('Kirim Ulasan');

  I.seeInPopup('Nama dan ulasan harus memiliki setidaknya 3 karakter.');
  I.acceptPopup();
});