import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
export default function Info() {
    return (
        <footer className="text-white p-8 w-full" style={{backgroundColor : "#80BCBD"}}>
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="mb-4 lg:mb-0">
                    <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                    <p className="text-sm">Stay connected with us on social media for updates!</p>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-sky-500" title="Twitter">
                        <FaTwitter size={32} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-pink-500" title="Instagram">
                        <FaInstagram size={32} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500" title="Facebook">
                        <FaFacebook size={32} />
                    </a>
                </div>
                <div>
                    <p className="text-sm">&copy; 2024 PintarLabs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}