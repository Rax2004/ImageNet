import { assets } from "../assets/assets"

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28 '>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2 '>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>
      <div className ="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img src={assets.sample_img_1} alt="" className="w-80 xl:w-96 rounded-lg"/>
        <div>
            <h2 className="text-3xl font-medium max-w-lg mb-4">Introducing the AI-Powered Text to Image Generator</h2>
            <p className="text-gray-600 mb-4 ">Imagenet is an AI-powered platform that transforms your words into stunning visuals within seconds. Whether you're an artist, developer, content creator, or just someone with a creative spark, Imagenet empowers you to bring your imagination to life. Simply describe your idea, and our intelligent engine will generate a unique, high-quality image that matches your vision — instantly.</p>
            <p className="text-gray-600 ">Enter a simple text prompt, and our advanced AI will instantly generate everything from high-quality product renders and character designs to imaginative portraits and futuristic concepts — even those that haven’t been dreamed up yet.</p>
        </div>
      </div>


    </div>
  )
}

export default Description
