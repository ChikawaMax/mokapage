import Image from "next/image";

export default function Photo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="container max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            モカちゃん写真集
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array(21)
            .fill(0)
            .map((a, index) => {
              return (
                <div
                  key={index}
                  className="relative block overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <Image
                    src={`/img/moka${index}.jpg`}
                    alt="moka's Photo"
                    width={300}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
