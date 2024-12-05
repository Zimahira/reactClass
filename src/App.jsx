import "./App.css";
import image from "./assets/ProfileImg.png";
// import MyButton from './components/MyButton'
import ProductDisplay from "./ProductDisplay";
import productData from "./data";
import CartPage from "./CartPage";
import { useState } from "react";

// const users = [
//   {
//     name: 'Hira',
//     age: 21,
//     linkUrl: '',
//     isMarried: false,
//     image: image,
//     hobbies: 'Coding',
//     Education: 'B.A English and literary studies',
//     Job: 'UNEMPLOYED',
//     Address: 'ogba,Lagos Nigeria',
//     Phone: '+234 703 123 4567',
//     Email: 'hira@gmail.com',
//     Bio: 'I am a young and ambitious individual with a passion for coding and learning new things.',
//     Skills: 'HTML,CSS,JavaScript',
//     Experience: 'No experience yet',
//   },
//   {
//     name: 'John',
//     age: 21,
//     linkUrl: '',
//     isMarried: false,
//     image: image,
//     hobbies: 'Coding',
//     Education: 'B.A English and literary studies',
//     Job: 'UNEMPLOYED',
//     Address: 'ogba,Lagos Nigeria',
//     Phone: '+234 703 123 4567',
//     Email: 'hira@gmail.com',
//     Bio: 'I am a young and ambitious individual with a passion for coding and learning new things.',
//     Skills: 'HTML,CSS,JavaScript',
//     Experience: 'No experience yet',
//   },
//   {
//     name: 'Jane',
//     age: 21,
//     linkUrl: '',
//     isMarried: false,
//     image: image,
//     hobbies: 'Coding',
//     Education: 'B.A English and literary studies',
//     Job: 'UNEMPLOYED',
//     Address: 'ogba,Lagos Nigeria',
//     Phone: '+234 703 123 4567',
//     Email: 'hira@gmail.com',
//     Bio: 'I am a young and ambitious individual with a passion for coding and learning new things.',
//     Skills: 'HTML,CSS,JavaScript',
//     Experience: 'No experience yet',
//   },
// ]

// const subjects = [
//   {
//     name: 'temi',
//     subject: {
//       science: ['biology', 'chemisty', 'physics'],
//       art: ['crs', 'govt', 'literature']
//     }
//   },
//   {
//     name: 'fola',
//     subject: {
//       science: ['biology', 'furtherMaths', 'physics'],
//       art: ['crs', 'civics', 'literature']
//     }
//   },
//   {
//     name: 'lizzy',
//     subject: {
//       science: ['biology', 'maths', 'physics'],
//       art: ['crs', 'english', 'literature']
//     }
//   }
// ]

// function App() {
//   function handleClick() {
//     window.location.href = 'http://localhost:5173/profile'
//   }

//   return (
//     <div className='container'>
//       {/* {
//         users.map((details) =>
//           <>
//             <a href={details?.linkUrl}></a>
//             <img src={details?.image} className='image' onClick={handleClick} />

//             <h1>Welcome {details?.name}</h1>
//             <p className='about'> Age: {details?.age}</p>
//             <p className='about'>Relationship status: {details?.isMarried ? 'Married' : 'Single'}</p>
//             <p className='about'>Hobbies: {details?.hobbies}</p>
//             <p className='about'>Education: {details?.Education}</p>
//             <p className='about'>Job: {details?.Job}</p>
//             <p className='about'>Address: {details?.Address}</p>
//             <p className='about'>Phone: {details?.Phone}</p>
//             <p className='about'>Email: {details?.Email}</p>
//             <p className='about'>Bio: {details?.Bio}</p>
//             <p className='about'>Skills: {details?.Skills}</p>
//             <p className='about'>Experience: {details?.Experience}</p>
//             <button onClick={handleClick}>show more</button>
//           </>
//         )
//       } */}
//       <>
//         <p className='about'>Student name: {subjects[0].name}</p>
//         <p>First science subject: {subjects[0].subject.science[0]}</p>
//         <p>First art subject: {subjects[0].subject.art[0]}</p>
//       </>

//     <MyButton />

//     </div>
//   )
//

function App() {
  const [totalPrice, setTotalPrice] = useState(0); //hooks
  const [displayItem, setDisplayItem] = useState([]);

  return (
    <div className="child">
      <ProductDisplay
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        displayItem={displayItem}
        setDisplayItem={setDisplayItem}
      />
      <CartPage
        totalPrice={totalPrice}
        displayItem={displayItem}
        setDisplayItem={setDisplayItem}
      />
    </div>
  );
}
export default App;
