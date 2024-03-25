
// import React, { useState } from 'react';

// function Sidebar() {
//   // State to manage whether categories are shown or not
//   const [showCategories, setShowCategories] = useState(false);
//   const [showCategoriesplan, setShowCategoriesplan] = useState(false);
//   const [showCategoriesdesign, setShowCategoriesdesign] = useState(false);
//   const [showCategoriesmanufacture, setShowCategoriesmanufacture] = useState(false);
//   const [showCategoriessales, setShowCategoriessales] = useState(false);
//   const [showsubCategories, setShowsubCategories] = useState(false);

 
//   // Function to toggle the visibility of categories
//   const toggleCategories = () => {
//     setShowCategories(!showCategories);
//   };

//    const toggleCategoriesplan = () => {
//     setShowCategoriesplan(!showCategoriesplan);
//   }

//   const toggleCategoriesdesign = () => {
//     setShowCategoriesdesign(!showCategoriesdesign);
//   };
//   const toggleCategoriesmanufacture = () => {
//     setShowCategoriesmanufacture(!showCategoriesmanufacture);
//   };
//   const toggleCategoriessales = () => {
//     setShowCategoriessales(!showCategoriessales);
//   };
//   const togglesubCategories = () => {
//     setShowsubCategories(!showsubCategories);
//   };

//   return (
//     <div className='w-2/4 h-full flex flex-col justify-center items-center bg-stone-200 bg-opacity-30'>
//       <div className='flex w-3/4 flex-col gap-4'>
//         {/* Button to toggle categories */}
//         <button 
//           className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'
//           onClick={toggleCategories}
//         >
//           Market Research
//         </button>

//         {/* Render categories only if showCategories is true */}
//         {showCategories && (
//           <div className='w-3/4 h-full flex  justify-center items-center  bg-opacity-30'>
            
//             <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500' onClick={togglesubCategories}>
//               External
//             </button>
        
//             {showsubCategories && (
//           <div className='flex w-3/4 flex-col justify-center items-center  bg-opacity-30'>
            
//             <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500' >
//              B2C
//             </button>
        
//             <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
//              B2C
//             </button>
//           </div>
//         )}


//             <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
//               Internal
//             </button>
//           </div>
//         )}
        
//         <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'  onClick={toggleCategoriesplan}>Planning</button>

//         {showCategoriesplan && (
//           <div className='w-3/4 h-full flex  justify-center items-center  bg-opacity-30'>
//             {/* External category */}
//             <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
//              PRD
//             </button>
//             {/* Internal category */}
//             <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
//               Specs
//             </button>
//           </div>
//         )}


//         <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500' onClick={toggleCategoriesdesign}>Designing</button>
//         {showCategoriesdesign && (
//           <div className='w-3/4 h-full flex  justify-center items-center  bg-opacity-30'>
//             {/* External category */}
//             <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
//              Hardware
//             </button>
//             {/* Internal category */}
//             <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
//               Software
//             </button>
//           </div>
//         )}



//         <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500' onClick={toggleCategoriesmanufacture}>Manufacturing</button>
//         {showCategoriesmanufacture && (
//           <div className='w-3/4 h-full flex  justify-center items-center  bg-opacity-30'>
//             {/* External category */}
//             <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
//             Material
//             </button>
//             {/* Internal category */}
//             <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
//               Production
//             </button>
//           </div>
//         )}

//         <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500' onClick={toggleCategoriessales}>Sales</button>
//         {showCategoriessales && (
//           <div className='w-3/4 h-full flex  justify-center items-center  bg-opacity-30'>
//             {/* External category */}
//             <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
//          Online
//             </button>
//             {/* Internal category */}
//             <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'> 
//           Dealership
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Sidebar;



import React, { useState } from 'react';

function Sidebar() {
  // States
  const [showCategories, setShowCategories] = useState(false);
  const [showCategoriesplan, setShowCategoriesplan] = useState(false);
  const [showCategoriesdesign, setShowCategoriesdesign] = useState(false);
  const [showCategoriesmanufacture, setShowCategoriesmanufacture] = useState(false);
  const [showCategoriessales, setShowCategoriessales] = useState(false);
  const [showsubCategories, setShowsubCategories] = useState(false);
  const [showb2cCategories, setShowb2cCategories] = useState(false);

 
  //  visibility of categories
  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

   const toggleCategoriesplan = () => {
    setShowCategoriesplan(!showCategoriesplan);
  }

  const toggleCategoriesdesign = () => {
    setShowCategoriesdesign(!showCategoriesdesign);
  };
  const toggleCategoriesmanufacture = () => {
    setShowCategoriesmanufacture(!showCategoriesmanufacture);
  };
  const toggleCategoriessales = () => {
    setShowCategoriessales(!showCategoriessales);
  };
  const togglesubCategories = () => {
    setShowsubCategories(!showsubCategories);
  };

  const toggleB2C = () => {
    setShowb2cCategories(!showb2cCategories);
  };


  return (
    <div className='w-2/4 h-full flex flex-col justify-center items-center bg-stone-200 bg-opacity-30'>
      <div className='flex w-3/4 flex-col gap-4'>
       
        <button 
          className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'
          onClick={toggleCategories}
        >
          Market Research
        </button>

       
        {showCategories && (
          <div className='w-3/4 h-full flex  justify-center items-center  bg-opacity-30'>
            
            <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500' onClick={togglesubCategories}>
              External
            </button>
        
            {showsubCategories && (
          <div className='flex w-3/4 flex-col justify-center items-center  bg-opacity-30'>
            
            <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500' onClick={toggleB2C} >
             B2C
            </button>

            {showb2cCategories && (
          <div className='flex w-3/4 flex-col justify-center items-center  bg-opacity-30'>
            
            <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'  >
            Online
            </button>
            <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
            interview
            </button>
            <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'  >
            Product data
            </button>
            <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
           Health
            </button>
          </div>
        )}



        
            <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
             B2B
            </button>
          </div>
        )}


            <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
              Internal
            </button>
          </div>
        )}
        
        <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'  onClick={toggleCategoriesplan}>Planning</button>

        {showCategoriesplan && (
          <div className='w-3/4 h-full flex  justify-center items-center  bg-opacity-30'>
            
            <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
             PRD
            </button>
            
            <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
              Specs
            </button>
          </div>
        )}


        <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500' onClick={toggleCategoriesdesign}>Designing</button>
        {showCategoriesdesign && (
          <div className='w-3/4 h-full flex  justify-center items-center  bg-opacity-30'>
           
            <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
             Hardware
            </button>
           
            <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
              Software
            </button>
          </div>
        )}



        <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500' onClick={toggleCategoriesmanufacture}>Manufacturing</button>
        {showCategoriesmanufacture && (
          <div className='w-3/4 h-full flex  justify-center items-center  bg-opacity-30'>
           
            <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
            Material
            </button>
           
            <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
              Production
            </button>
          </div>
        )}

        <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500' onClick={toggleCategoriessales}>Sales</button>
        {showCategoriessales && (
          <div className='w-3/4 h-full flex  justify-center items-center  bg-opacity-30'>
         
            <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'>
         Online
            </button>
         
            <button className='bg-black py-2 px-2 w-auto rounded-full text-white hover:text-blue-500'> 
          Dealership
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
