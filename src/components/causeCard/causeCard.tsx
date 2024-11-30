import Image from 'next/image'

export default function CauseCard() {

    const goal = 1000;
    const raised = 458;
    const donations = 14;
    const progress = (raised / goal) * 100;
    console.log(progress);
    return(
        <div className='flex flex-col w-full rounded-xl shadow-lg'>
            <Image className='w-full rounded-t-xl' src="/home.jpg" alt="cause" width={300} height={200}/>
            <div className="flex flex-col gap-3 p-4">
                <h1 className="text-2xl font-bold">Cause name</h1>
                <p>
                    Tincidunt luctus porta amet lectus at ultricies nec sed non. Sed
                    sit egestas enim consectetur donec faucibus. Ornare ac dolor
                    porta tellus viverra arcu a ridiculus.
                </p>
                <div>
                    <div className="w-full bg-gray-300 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <p className='font-bold'>Goal: ${goal}</p>
                        <p>Raised: ${raised}</p>
                    </div>
                    <div className='text-end'>
                        <p className='font-bold'>{donations}</p>
                        <p>donations</p>
                    </div>
                </div>
                <button className="bg-black w-full text-white py-2 px-4 rounded-md text-md font-medium hover:bg-green-600 transition-transform transform hover:scale-105">
                    VIEW DETAILS
                </button>
            </div>
        </div>
    )
}