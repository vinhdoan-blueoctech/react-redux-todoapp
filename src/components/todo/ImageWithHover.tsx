import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";

const ImageWithHover = ({ src }: { src: string }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <img
          src={src}
          alt="Background Illustration"
          className="w-14 h-22 rounded-md cursor-pointer 
                               hover:scale-110 hover:rotate-3 hover:brightness-125 
                               transition-transform duration-500 ease-out"
        />
      </DialogTrigger>
      <DialogContent className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 rounded-2xl shadow-2xl text-white max-w-4xl">
        <DialogHeader>
          <DialogDescription className="flex items-start gap-10">
            <img
              src={src}
              alt="Modal Illustration"
              className="w-2/5 max-h-[80vh] rounded-[26px] shadow-lg object-contain "
            />
            <div className="w-3/5 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">The Fool</h2>
              <p className="text-base leading-relaxed">
                The Fool represents new beginnings, spontaneity, and a free
                spirit. It is a card of unlimited potential, urging you to
                embrace new adventures and take leaps of faith. The Fool invites
                you to trust in the universe and let go of fear, for life’s
                greatest journeys begin with a single step into the unknown.
              </p>
              <br></br>
              <br></br>
              <p className="text-base leading-relaxed">
                Have a nice day yeah !
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ImageWithHover;
