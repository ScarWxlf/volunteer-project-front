import Link from "next/link";
import Image from "next/image";
import SimilarCauseCard from "@/components/causeCard/similarCauseCard";
import PaymentForm from "./paymentForm";
export default function DetailsPage() {
  const goal = 1000;
  const raised = 458;
  const donations = 14;
  const progress = (raised / goal) * 100;
  return (
    <div className="flex flex-col px-4 sm:px-8 lg:px-12 xl:px-32 my-8">
      <div>
        <Link className="text-gray-500" href="/">
          Home
        </Link>
        <span className="mx-2">{">"}</span>
        <Link href="/causes">Causes</Link>
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-5">There is title</h1>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-2/3">
          <Image className="w-full rounded-3xl" layout="responsive" src="/home.jpg" alt="title" width={0} height={0}/>
          <div className="h-4 w-full my-5 bg-gray-200 rounded-xl">
            <div
              className="h-4 bg-green-500 rounded-xl"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between w-full">
            <div>
              <p className="text-2xl font-bold">Goal: ${goal}</p>
              <p>Raised: ${raised}</p>
            </div>
            <div className="text-end">
              <p className="text-2xl font-bold">{donations}</p>
              <p>donations</p>
            </div>
          </div>
          <PaymentForm />
          <div className="w-full">
            <h1 className="text-3xl font-bold">Desctiprion</h1>
            <p className="my-4">
              Urna velit pharetra pellentesque magna eget. Ut egestas est id
              netus. Facilisis mollis morbi ultrices ac tellus vitae pulvinar.
              Egestas sagittis nec et arcu enim ac. Vivamus a dignissim nulla
              ornare sit aliquam elementum blandit. Leo in sem pellentesque
              viverra malesuada viverra eget aliquam. Diam mi dolor adipiscing
              pellentesque nec at. Ut nisi faucibus ultrices etiam tortor vitae
              eros. Nec laoreet felis egestas ultrices a quis turpis sit. Eget
              semper commodo pellentesque eget orci tincidunt commodo facilisi
              ultricies. Nec mi in augue dolor sit convallis habitant ut
              accumsan. Ultrices neque diam id aliquam lobortis est faucibus
              sed. Dolor nibh arcu ornare mi donec suspendisse nisl nullam.
            </p>
            <Image
              src="/home.jpg"
              alt="title"
              layout="responsive"
              width={0}
              height={0}
              className="rounded-2xl"            
            />
            <p className="my-4">
              Nunc tortor et a ornare et placerat. Tellus in ultricies risus
              accumsan turpis id nam. Maecenas proin sodales diam vel mauris
              facilisis arcu semper. Mi accumsan gravida dignissim turpis
              sollicitudin. At auctor sed facilisi massa amet. Est morbi aliquam
              sed orci. Pulvinar aliquam sed egestas tempus aliquet
              sollicitudin. Lectus et rhoncus venenatis interdum lectus nam.
              Amet curabitur cursus pulvinar nisl id morbi adipiscing. Nunc eget
              arcu enim ac pellentesque integer bibendum augue. Ut amet tortor
              auctor hendrerit. Massa at amet nisl mauris vulputate. Accumsan
              quis vel habitasse arcu nisi sed. Pharetra malesuada velit iaculis
              urna eu. Luctus lobortis lacus metus nec ullamcorper. Arcu nisl
              odio elit nunc. Arcu amet imperdiet cras volutpat. Facilisis
              euismod bibendum urna eu feugiat. Et morbi mauris ultrices massa
              tellus purus suspendisse nec. Magnis tempor aliquam elementum
              imperdiet posuere. Quis arcu ultricies id quisque leo pulvinar
              augue sit. Arcu ultricies malesuada lectus nulla est nunc integer
              pellentesque magna. Egestas malesuada faucibus arcu nunc elit leo
              quis interdum. Ac vel in commodo accumsan mollis cras massa
              posuere eget. Condimentum posuere velit cras velit tortor
              ridiculus sit. Lectus augue libero etiam sed nisl.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="h-96 text-center text-2xl font-bold">
            There will be something (maybe)
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h1 className="text-2xl font-bold">Similar Causes</h1>
            <SimilarCauseCard />
            <SimilarCauseCard />
            <SimilarCauseCard />
          </div>
        </div>
      </div>
    </div>
  );
}
