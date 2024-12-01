

export default function SimilarCauseCard() {
    return(
        <div className="w-full flex p-2 gap-4 h-40">
            <img className="object-cover rounded-xl h-full w-1/2" src="/home.jpg" alt="title" />
            <div className="flex flex-col gap-2 items-start max-w-3/5 overflow-hidden text-ellipsis ">
                <h1 className="text-xl font-bold">Title</h1>
                <p className="overflow-hidden text-sm">
                    Tincidunt luctus porta amet lectus at ultricies nec sed non. Sed
                    sit egestas enim consectetur donec faucibus. Ornare ac dolor
                    porta tellus viverra arcu a ridiculus.
                </p>
                <button className="font-bold text-sm">VIEW DETAILS</button>
            </div>
        </div>
    )
}