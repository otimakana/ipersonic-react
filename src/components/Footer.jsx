function Footer() {
    return (
      <div className="footer mt-20" id="social">
        <div className="container mx-auto flex px-6 items-center justify-between">
          <p className="py-4 ">&copy; Copyright by <span className="font-bold">otimakana</span></p>
          <div className="social-footer flex items-center sm:gap-7 gap-2">
            <i className="ri-facebook-circle-fill text-2xl"></i>
            <i className="ri-twitter-fill text-2xl"></i>
            <i className="ri-github-fill text-2xl"></i>
            <i className="ri-instagram-fill text-2xl"></i>
            <i className="ri-tiktok-fill text-2xl"></i>
          </div>
        </div>
      </div>
    )
  }
  
  export default Footer