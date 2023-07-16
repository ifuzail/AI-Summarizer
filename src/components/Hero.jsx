import {logo2} from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col" >
      <nav className='flex justify-between items-center w-full mt-5 mb-10'>
         <img src={logo2} alt='sumz_logo' className='w-24 object-contain'/>
         

         <button type='button' onClick={()=> window.open('https://github.com/ifuzail/AI-Summarizer')} className='black_btn'>
           GitHub
         </button>
      </nav>
      <h1 className='head_text'>Summarize Article with <br className='max-md:hidden'/> <span className='teal_gradient'>OpenAI GPT-4</span>  
      </h1>
      <h2 className='desc'>Effortlessly Condense Complex Texts into Bite-Sized Insights with AI Summarizer</h2>
    </header>
  )
}

export default Hero
