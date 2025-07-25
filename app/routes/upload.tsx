import React, {useState, type FormEvent} from 'react'
import FileUploader from '~/components/FileUploader';
import Navbar from "~/components/Navbar";

const upload = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText,setStatusText] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const handleFileSelect = (file: File | null) => {
        setFile(file);
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement >) => {
        e.preventDefault();
        const form = e.currentTarget.closest('form');
        if (!form) return;
        const formData = new FormData(form);

        const companyName = formData.get('companyName');
        const jobTitle = formData.get('job-title');
        const jobDescription = formData.get('job-description');

        console.log({
            companyName,jobTitle,jobDescription,file
        });

    }

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
 
    <section className="main-section">
        <div className='page-heading py-16'>
            <h1>Smart feedbacks for your dream job!!</h1>
            {isProcessing ? (
                <>
                <h2>{statusText}</h2>
                <img src='/images/resume-scan.gif' className='w-full'/>
                </>
            ): (
                <h2>Let's check the ATS score of your resume!! </h2>
            )}

            {!isProcessing && (
                <form id="upload-form" onSubmit={handleSubmit} className=' flex flex-col gap-4 mt-8'>
                    <div className='form-div'>
                        <label htmlFor='company-name'> Company Name  </label>
                        <input type="text" id='company-name' name='companyName' placeholder='Company Name' />
                    </div>

                    <div className='form-div'>
                        <label htmlFor='job-title'> Job Title  </label>
                        <input type="text" id='job-title' name='job-title' placeholder='Job Title' />
                    </div>

                    <div className='form-div'>
                        <label htmlFor='job-description'> Job Description  </label>
                        <textarea rows={5} id='job-description' name='job-description' placeholder='Job Description' />
                    </div>

                    <div className='form-div'>
                        <label htmlFor='uploader'> Upload  </label>
                       {/* <FileUploader onFileSelect={handleFileSelect}/> */}
                       <FileUploader file={file} onFileSelect={handleFileSelect} />

                    </div>

                    <button className='primary-button' type='submit'>Analyze Resume</button>

                    

                </form>
            )}

        </div>

        </section>
        </main>
  )
}

export default upload
