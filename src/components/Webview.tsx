import React from 'react';

interface WebviewProps {
  url: string;
}

const Webview: React.FC<WebviewProps> = ({ url }) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <iframe
        src={url}
        title="Embedded Website"
        className="w-full h-full border-none"
        allowFullScreen
      />
    </div>
  );
};

export default Webview;