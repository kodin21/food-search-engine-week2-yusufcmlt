//Yardimci fonksiyonlar vb

//Verilen string ile element olustur.
//Olusturulan document icerisindeki ilk elementi sec. (gruplandigi surece sikinti yok)
const parseHTML = (htmlStr) => {
  const templateDoc = new DOMParser().parseFromString(htmlStr, "text/html");
  console.log(templateDoc.body.firstChild);
  return templateDoc.body.firstChild;
};

export { parseHTML };
