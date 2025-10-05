import React from 'react'

const TemplateAI = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white p-8">
      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#52525B] to-[#18181B]"></div>
      
      <div className="flex flex-col items-center justify-center flex-1 -mt-20">
        <h1 className="text-4xl font-bold mb-16">Choose a template</h1>
        
        <div className="flex gap-16">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-1">Full Story</h3>
            <p className="text-sm text-gray-500 mb-4">Template 1 of 5</p>
            
            <div className="w-40 h-48 bg-white border-2 border-gray-200 rounded-xl mb-4"></div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => console.log('Template selected: Full Story')}
                className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Use template
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                Preview
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-1">Quick Intro</h3>
            <p className="text-sm text-gray-500 mb-4">Template 2 of 5</p>
            
            <div className="w-40 h-48 bg-white border-2 border-gray-200 rounded-xl mb-4"></div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => console.log('Template selected: Quick Intro')}
                className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Use template
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                Preview
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <a href="#" className="text-gray-400 text-sm hover:text-gray-600 transition-colors underline">
            BYOB - Build Your Own Bio
          </a>
        </div>
      </div>
    </div>
  )
}

export default TemplateAI;