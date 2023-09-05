import { Button } from "@/components/ui/button";

const SubmitSuccess = () => {
  return (
    <div className="w-full flex justify-center mt-8 px-4">
      <div className="w-full mx-auto text-center">
        <img src="/success-exploration.svg" alt="success" className="w-fit mx-auto" />
        <div className="mt-5">
          <h2 className="text-xl font-medium">Your response have been submitted!</h2>
          <h3 className="font-light mt-2">We value your feedback and we appreciate your time.</h3>
          <Button className="mt-5 w-full" size="lg">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubmitSuccess;
