import '../assets/global.css';
import book from '../assets/book.json'
import Lottie from 'lottie-react'
export default function Books() {
    return (
        <div className="flex justify-center">
            <Lottie animationData={book} />
        </div>
    )
}