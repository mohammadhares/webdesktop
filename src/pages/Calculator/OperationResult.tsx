import React from 'react';

interface ResultProps {
  result: string;
}

const OperationResult: React.FC<ResultProps> = ({ result }) => {
  return (
    <div className="result">
      <p>{result}</p>
    </div>
  );
};

export default OperationResult;