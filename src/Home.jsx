import { Button, Link } from './Components'

function Home() {
    return (
        <main className='pxl-10 pt-5'>
            <div className='w-screen flex justify-center items-center'>
                <div className="text-7xl p-4 bg-purple-200 rounded-xl transition-all ease-in-out duration-500 hover:rotate-12"><span className="cursor-default">✋🏻</span></div>
            </div>
            <h1 className="font-light text-4xl w-screen text-center mt-4">Hello, my name is Vladimir!</h1>
        </main>
    )
}

export { Home };