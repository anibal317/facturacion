import VideoBackground from "../videoBackground/VideoBackground"

export default function Welcoming() {
    const videoUrl = '/videos/home/quienes_somos.mp4'
    const title = "Bienvenidos a Bolivar Software"
    return (
            <section className="scroll-smooth" id="welcoming ">
                <div className="relative flex justify-center items-center w-full h-screen overflow-hidden">
                    <div >
                        <VideoBackground videoUrl={videoUrl} title={title} />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-60">
                    </div>
                    <p className="relative z-10 px-4 max-w-8xl text-center text-lg text-white md:text-xl lg:text-5xl animate-fade-up">
                        Somos una empresa de desarrollo de software, que acompañamos a nuestros clientes en todo el proceso.
                    </p>
                </div>
            </section>
    )
};
