import { BeatLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="spinner loading-button">
      <BeatLoader color="#e2e8f0" size={10} />
    </div>
  );
}
