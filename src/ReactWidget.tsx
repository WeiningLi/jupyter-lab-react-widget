import React from 'react';
import { WidgetModel } from '@jupyter-widgets/base';
import { useModelState, WidgetModelContext } from './hooks/widget-model';

interface WidgetProps {
  model: WidgetModel;
}

function ReactWidget(props: WidgetProps) {
  const [pdfName, setPdfName] = useModelState('pdfName');
  const [viewCount, setViewCount] = useModelState('viewCount');
  const iframeCSS = {
    height: '600px',
    width: '500px',
    frameborder: 0,
  };

  return (
    <div className="Widget">
      <h1>
        Viewing {pdfName}, viewed {viewCount} times
      </h1>
      {pdfName !== '' ? (
        <iframe
          src={pdfName}
          onClick={() => {
            setPdfName(pdfName);
          }}
          style={iframeCSS}
        />
      ) : null}
      <button
        onClick={() => {
          setViewCount(viewCount + 1);
        }}
      >
        view
      </button>
    </div>
  );
}

function withModelContext(Component: (props: WidgetProps) => JSX.Element) {
  return (props: WidgetProps) => (
    <WidgetModelContext.Provider value={props.model}>
      <Component {...props} />
    </WidgetModelContext.Provider>
  );
}

export default withModelContext(ReactWidget);
