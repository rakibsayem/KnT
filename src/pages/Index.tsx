import Webview from "@/components/Webview";

const TARGET_URL = "http://isn.ispsimple.com";

const Index = () => {
  // Use h-screen and w-screen to ensure the iframe fills the entire viewport, mimicking a native webview.
  return (
    <div className="w-screen h-screen p-0 m-0 overflow-hidden">
      <Webview url={TARGET_URL} />
    </div>
  );
};

export default Index;