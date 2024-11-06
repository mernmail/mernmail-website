import Link from "next/link";

const Iconss = () => {
  const socialLinks = {
    x: "https://x.com/MERNMail",
    Mastodon: "https://mastodon.social/@mernmail",
    Bluesky: "https://bsky.app/profile/mernmail.org"
  };

  return (
    <>
      <Link
        href={socialLinks.x}
        target="_blank"
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-3"
      >
        <span className="sr-only">X icon</span>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.0039 2.34375H22.4512L14.9219 10.9473L23.7793 22.6562H16.8457L11.4111 15.5566L5.2002 22.6562H1.74805L9.7998 13.4521L1.30859 2.34375H8.41797L13.3252 8.83301L19.0039 2.34375ZM17.793 20.5957H19.7021L7.37793 4.29688H5.32715L17.793 20.5957Z"
            fill="currentColor"
          />
        </svg>
      </Link>

      <Link
        href={socialLinks.Mastodon}
        target="_blank"
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-3"
      >
        <span className="sr-only">Mastodon icon</span>

        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.163 8.74512C24.163 3.99903 20.6083 2.60743 20.6083 2.60743C17.1206 1.20606 7.85163 1.22071 4.39739 2.60743C4.39739 2.60743 0.842704 3.99903 0.842704 8.74512C0.842704 14.3945 0.4744 21.4111 6.73556 22.8613C8.99561 23.3838 10.9376 23.4961 12.5001 23.418C15.3349 23.2813 16.9253 22.5342 16.9253 22.5342L16.8304 20.7324C16.8304 20.7324 14.8048 21.2891 12.528 21.2256C10.2735 21.1572 7.89627 21.0107 7.52797 18.5889C7.49366 18.3639 7.47688 18.1371 7.47775 17.9102C12.2545 18.9307 16.3338 18.3545 17.4554 18.2373C20.586 17.9102 23.3148 16.2207 23.6608 14.6777C24.2077 12.2461 24.163 8.74512 24.163 8.74512ZM19.9722 14.8584H17.3717V9.28223C17.3717 6.85548 13.8003 6.7627 13.8003 9.61915V12.6709H11.2166V9.61915C11.2166 6.7627 7.64516 6.85548 7.64516 9.28223V14.8584H5.03355C5.03355 8.89649 4.74337 7.63673 6.06034 6.31348C7.50565 4.90235 10.5135 4.80958 11.8527 6.61134L12.5001 7.56348L13.1474 6.61134C14.4923 4.79981 17.5057 4.91212 18.9398 6.31348C20.2623 7.64649 19.9666 8.90137 19.9666 14.8584H19.9722Z"
            fill="currentColor"
          />
        </svg>
      </Link>

      <Link
        href={socialLinks.Bluesky}
        target="_blank"
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-3"
      >
        <span className="sr-only">Bluesky icon</span>

        <svg
          width="25"
          height="25"
          viewBox="0 0 576 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M407.8 294.7C404.5 294.3 401.1 293.9 397.8 293.4C401.2 293.8 404.5 294.3 407.8 294.7ZM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6 -9.40003 37.5 -1.70003 21.6 5.49997C3.3 13.8 0 41.9 0 58.4C0 74.9 9.1 194 15 213.9C34.5 279.6 104.1 301.8 168.2 294.6C171.5 294.1 174.8 293.7 178.2 293.2C174.9 293.7 171.6 294.2 168.2 294.6C74.3 308.6 -9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1C310.9 437.8 337.2 583.6 473.6 464.5C576 361.1 501.7 308.5 407.8 294.6C404.5 294.2 401.1 293.8 397.8 293.3C401.2 293.7 404.5 294.2 407.8 294.6C471.9 301.7 541.4 279.5 561 213.9C566.9 194 576 75 576 58.4C576 41.8 572.7 13.7 554.4 5.49997C538.6 -1.60003 514.4 -9.40003 451.2 35.3C385.1 81.9 314.1 176.4 288 227.1Z"
            fill="currentColor"
          />
        </svg>
      </Link>
    </>
  );
};

export default Iconss;
