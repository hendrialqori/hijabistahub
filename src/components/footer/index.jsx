export const Footer = () => {
  return (
    <footer className="bg-black text-white" aria-label="wrapper-footer">
        <div className="w-[93%] mx-auto py-12 flex flex-wrap gap-10" aria-label="footer-container">
          <div className="w-10/12 md:w-5/12 lg:w-3/12" aria-label="form-submit">
            <h1 className="border-b-[1px] pb-5">JOIN OUR MAILING LIST</h1>
            <p className="py-5 text-[.8rem]">Sign up to our newsletter to get more promotions and news update.</p>
            <form className="border-[1px] flex" onSubmit={e => e.preventDefault()}>
              <input
               type="text"
               className="py-3 w-full bg-black text-[.8rem] border-none outline-none px-2 "
               placeholder="Email address"
                />
              <button className="bg-white text-black p-[.85rem] tracking-[.05rem] w-4/12 text-[.8rem]" type="submit">SUBSCRIBE</button>
            </form>
          </div>

          <div className="w-10/12 md:w-5/12 lg:w-2/12" aria-label="about">
            <h1 className="border-b-[1px] pb-5">ABOUT HIJABISTAHUB</h1>
            <p className="py-5 text-[.8rem]">About</p>
          </div>

          <div className="w-10/12 md:w-5/12 lg:w-2/12" aria-label="information">
            <h1 className="border-b-[1px] pb-5">INFORMATION</h1>
            <ul className="text-[.8rem] py-5 ">
              <li>How To Order</li>
              <li>Shipping Details</li>
              <li>Payment</li>
              <li>Track Order</li>
              <li>Pick Up Order</li>
            </ul>
          </div>

          <div className="w-10/12 md:w-5/12 lg:w-2/12" aria-label="help-follow">
            <div className="">
              <h1 className="border-b-[1px] pb-5">HELP</h1>
                <ul className="text-[.8rem] py-5 ">
                  <li>Contact Us</li>
                  <li>Return &#38; Exchange</li>
                  <li>Terms &#38; Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="mt-5">
              <h1 className="border-b-[1px] pb-5">FOLLOW US</h1>
            </div>
          </div>

        </div>
        
        <h3 className="text-center text-[.8rem] py-10 w-10/12 md:w-full mx-auto">Copyright © 2022 Hijabistahub. All Rights Reserved. Powered by Webspert.</h3>
    </footer>
  )
}
