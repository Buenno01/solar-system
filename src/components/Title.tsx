import React from 'react';

type TitleProps = {
  headline: string,
};

function Title({ headline }: TitleProps) {
  return (
    <h2
      className="text-3xl font-medium my-8 text-center"
    >
      { headline }
    </h2>
  );
}

export default Title;
