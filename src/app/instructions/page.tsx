"use client";

const CustomControls = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-4 mb-10">
      <iframe
        width="1080"
        height="720"
        src={`https://www.youtube.com/embed/bNV9ztyvqj4`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h1 className="text-2xl font-bold">Links</h1>
      <h2 className="text-xl">
        <span className="font-extrabold"> Add MetaMask Extension: </span>
        <a
          href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
          className="hover:cursor-pointer text-blue-300"
        ></a>
        https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en
      </h2>
      <h2 className="text-xl">
        <span className="font-extrabold">Superchain Faucet: </span>
        <a
          href="https://console.optimism.io/faucet"
          className="hover:cursor-pointer"
        >
          https://console.optimism.io/faucet
        </a>
      </h2>
    </div>
  );
};

export default CustomControls;
