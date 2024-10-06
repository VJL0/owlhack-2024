const Card = ({ i, title, description, img, url, color }) => {
  return (
    <div className="sticky top-0 h-screen flex items-center justify-center">
      <div
        style={{
          backgroundColor: color,
        }}
        className="relative flex flex-col h-[500px] w-[1000px] rounded-[25px] p-[50px]"
      >
        <h2 className="text-center text-2xl">{title}</h2>
        <div className="flex h-full mt-[50px] gap-[50px]">
          <div className="description w-[40%] relative top-[10%]">
            <p className="text-base">
              {description}
              <span className="first-letter:text-2xl first-letter:font-title"></span>
            </p>
            {url != null && (
              <span className="flex items-center gap-1 mt-2">
                <a href={url} target="_blank" className="text-xs underline">
                  See more
                </a>
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="black"
                  />
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
