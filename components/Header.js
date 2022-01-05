import Image from "next/image";

function Header() {
  return (
    <header>
      <h1>Header</h1>
      <Image
        className="object-contain"
        src="https://static.wikia.nocookie.net/logopedia/images/2/20/Hulu_2019.svg/revision/latest/scale-to-width-down/200?cb=20190508165749"
        width={200}
        height={200}
      ></Image>
    </header>
  );
}

export default Header;
