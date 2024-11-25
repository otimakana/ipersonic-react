
const HomePage = () => {
  return (
    <div className="homepage">
    <div className="jumbotron bg-slate-200">
    <div className="container lg:mx-45 md:mx-20 sm:mx-auto px-5 pb-5">
        <div className="hero grid md:grid-cols-1  grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-light">
            Coba tes kepribadian yang
            paling terkenal di dunia.
            </h1>
            <h1 className="lg:text-7xl/tight text-3xl font-bold mb-4"><span>Hanya 60 detik.</span></h1>
            <a
              href="#"
              className="bg-orange-500 transition-all hover:bg-orange-600 py-2 px-4 text-white shadow"
            >
              Mulai Tes Gratis<i className="ri-play-fill ms-1"></i>
            </a>
            <p className="font-light mt-5">Dapatkan hasil secepatnya. <span className="font-bold font-size:15px">Tidak membutuhkan pendaftaran.</span></p>
          </div>
        </div>
      </div>
    </div>

    <div className="jumbotron-2 lg:mx-20 md:mx-30 sm:mx-auto">
    <div className="container mx-auto px-5">
        <div className="hero grid md:grid-cols-1  grid-cols-1 items-center gap-20">
          <div className="box">
            <p className="font-light text-2xl pt-6 pb-10"><span className="font-bold text-2xl">iPersonic dikembangkan oleh psikolog.</span>Felicitas Heyne, pengembang dan pendiri tes kepribadian iPersonic adalah psikolog terkenal dan penulis buku. Beliau adalah anggota afiliasi internasional American Psychological Association (APA).</p>
            <a href="#" className="bg-orange-500 transition-all hover:bg-orange-600 py-5 px-8 mt-6 text-white shadow text-xl"> Mulai Tes Gratis<i className="ri-play-fill ms-1"></i></a>
            <p className="font-light text-l mt-8">Dapatkan hasil secepatnya. <span className="font-bold">Tidak membutuhkan pendaftaran</span></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;

