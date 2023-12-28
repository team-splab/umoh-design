import React from 'react';

import type { StoryObj } from '@storybook/react';

const meta = {
  title: 'Foundation/Typography',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Typography: StoryObj = {
  render: () => (
    <div className="max-md:px-5 flex flex-col items-start bg-white p-12">
      <div className="max-md:max-w-full max-md:text-4xl self-stretch text-5xl font-bold text-black">
        H1
      </div>
      <div className="max-md:max-w-full mt-8 self-stretch whitespace-nowrap text-2xl font-bold text-black">
        blod
      </div>
      <div className="max-md:max-w-full max-md:flex-wrap mt-6 flex items-start justify-between gap-2 self-stretch">
        <div className="flex basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Bold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">40px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">48px</div>
          </div>
        </div>
        <div className="max-md:max-w-ful H1-boldl grow self-stretch whitespace-nowrap text-black H1-bold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:mr-2.5 max-md:mt-10 mr-3.5 mt-12 self-stretch whitespace-nowrap text-2xl font-bold text-black">
        semibold
      </div>
      <div className="max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 mr-3.5 mt-6 flex items-start justify-between gap-2 self-stretch">
        <div className="flex basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">SemiBold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">40px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">48px</div>
          </div>
        </div>
        <div className="max-md:max-w-full grow self-stretch whitespace-nowrap text-black H1-semibold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:text-4xl max-md:mt-10 mt-16 self-stretch whitespace-nowrap text-5xl font-bold text-black">
        H2
      </div>
      <div className="max-md:max-w-full mt-8 self-stretch whitespace-nowrap text-2xl font-bold text-black">
        bold
      </div>
      <div className="max-md:max-w-full max-md:flex-wrap mt-6 flex items-start justify-between gap-2 self-stretch">
        <div className="flex basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Bold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">36px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">43px</div>
          </div>
        </div>
        <div className="max-md:max-w-full grow self-stretch whitespace-nowrap text-black H2-bold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:mr-2.5 max-md:mt-10 mr-3.5 mt-12 self-stretch whitespace-nowrap text-2xl font-bold text-black">
        semibold
      </div>
      <div className="max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 mr-3.5 mt-6 flex items-start justify-between gap-2 self-stretch">
        <div className="flex basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">SemiBold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">36px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">43px</div>
          </div>
        </div>
        <div className="max-md:max-w-full grow self-stretch whitespace-nowrap text-black H2-semibold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:text-4xl max-md:mt-10 mt-16 self-stretch whitespace-nowrap text-5xl font-bold text-black">
        H3
      </div>
      <div className="max-md:max-w-full mt-8 self-stretch whitespace-nowrap text-2xl font-bold text-black">
        bold
      </div>
      <div className="max-md:max-w-full max-md:flex-wrap mt-6 flex items-stretch justify-between gap-2 self-stretch">
        <div className="flex basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Bold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">30px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">36px</div>
          </div>
        </div>
        <div className="max-md:max-w-full grow self-start whitespace-nowrap text-black H3-bold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:mr-2.5 max-md:mt-10 mr-3 mt-12 self-stretch whitespace-nowrap text-2xl font-bold text-black">
        semibold
      </div>
      <div className="max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 mr-3 mt-6 flex items-stretch justify-between gap-2 self-stretch">
        <div className="flex basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">SemiBold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">30px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">36px</div>
          </div>
        </div>
        <div className="max-md:max-w-full grow self-start whitespace-nowrap text-black H3-semibold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:mr-2.5 max-md:mt-10 mr-6 mt-12 self-stretch whitespace-nowrap text-2xl font-bold text-black">
        medium
      </div>
      <div className="max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 mr-6 mt-6 flex items-stretch justify-between gap-2 self-stretch">
        <div className="flex basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Medium</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">30px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">36px</div>
          </div>
        </div>
        <div className="max-md:max-w-full grow self-start whitespace-nowrap text-black H3-medium">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:text-4xl max-md:mt-10 mt-16 self-start whitespace-nowrap text-5xl font-bold text-black">
        H4
      </div>
      <div className="max-md:max-w-full mt-8 self-start whitespace-nowrap text-2xl font-bold text-black">
        bold
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[697px] max-w-full items-stretch gap-2 self-start">
        <div className="flex basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Bold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">24px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">30px</div>
          </div>
        </div>
        <div className="max-md:max-w-full grow self-start whitespace-nowrap text-black H4-bold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:mt-10 mt-12 self-start whitespace-nowrap text-2xl font-bold text-black">
        semibold
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[689px] max-w-full items-stretch gap-2 self-start">
        <div className="flex basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">SemiBold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">24px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">30px</div>
          </div>
        </div>
        <div className="max-md:max-w-full grow self-start whitespace-nowrap text-black H4-semibold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:mt-10 mt-12 self-start whitespace-nowrap text-2xl font-bold text-black">
        medium
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[681px] max-w-full items-stretch gap-2 self-start">
        <div className="flex basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Medium</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">24px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">30px</div>
          </div>
        </div>
        <div className="max-md:max-w-full grow self-start whitespace-nowrap text-black H4-medium">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:text-4xl max-md:mt-10 mt-16 self-start whitespace-nowrap text-5xl font-bold text-black">
        H5
      </div>
      <div className="max-md:max-w-full mt-8 self-start whitespace-nowrap text-2xl font-bold text-black">
        bold
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[616px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Bold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">20px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">24px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black H5-bold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:mt-10 mt-12 self-start whitespace-nowrap text-2xl font-bold text-black">
        semibold
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[609px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">SemiBold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">20px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">24px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black H5-semibold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:mt-10 mt-12 self-start whitespace-nowrap text-2xl font-bold text-black">
        medium
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[602px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Medium</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">20px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">24px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black H5-medium">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:text-4xl max-md:mt-10 mt-16 text-5xl font-bold text-black">
        body1
      </div>
      <div className="max-md:max-w-full mt-8 self-start whitespace-nowrap text-2xl font-bold text-black">
        extrabold
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[554px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">
              ExtraBold
            </div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">16px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">24px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black body1-extrabold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:mt-10 mt-12 self-start whitespace-nowrap text-2xl font-bold text-black">
        bold
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[548px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Bold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">16px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">24px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black body1-bold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:mt-10 mt-12 self-start whitespace-nowrap text-2xl font-bold text-black">
        semibold
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[543px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">SemiBold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">16px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">24px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black body1-semibold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:mt-10 mt-12 self-start whitespace-nowrap text-2xl font-bold text-black">
        medium
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[554px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Medium</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">16px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">24px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black body1-medium">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:mt-10 mt-12 self-start whitespace-nowrap text-2xl font-bold text-black">
        regular
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[554px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Regular</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">16px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">24px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black body1-regular">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:text-4xl max-md:mt-10 mt-16 self-start whitespace-nowrap text-5xl font-bold text-black">
        body2
      </div>
      <div className="max-md:max-w-full mt-8 self-start whitespace-nowrap text-2xl font-bold text-black">
        extrabold
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[510px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">
              ExtraBold
            </div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">14px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">24px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black body2-extrabold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:mt-10 mt-12 self-start whitespace-nowrap text-2xl font-bold text-black">
        bold
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[506px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Bold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">14px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">24px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black body2-bold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:mt-10 mt-12 self-start whitespace-nowrap text-2xl font-bold text-black">
        semibold
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[501px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">SemiBold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">14px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">24px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black body2-semibold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:mt-10 mt-12 self-start whitespace-nowrap text-2xl font-bold text-black">
        medium
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[496px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Medium</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">14px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">24px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black body2-medium">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:mt-10 mt-12 self-start whitespace-nowrap text-2xl font-bold text-black">
        regular
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[496px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Regular</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">14px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">24px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black body2-regular">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:text-4xl max-md:mt-10 mt-16 text-5xl font-bold text-black">
        detail1
      </div>
      <div className="max-md:max-w-full mt-8 self-start whitespace-nowrap text-2xl font-bold text-black">
        bold
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[463px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Bold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">12px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">20px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black detail1-bold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:mt-10 mt-12 self-start whitespace-nowrap text-2xl font-bold text-black">
        semibold
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[459px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">SemiBold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">12px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">20px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black detail1-semibold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:mt-10 mt-12 self-start whitespace-nowrap text-2xl font-bold text-black">
        medium
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[455px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Medium</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">12px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">20px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black detail1-medium">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:text-4xl max-md:mt-10 mt-16 self-start whitespace-nowrap text-5xl font-bold text-black">
        detail2
      </div>
      <div className="max-md:mt-10 mt-12 self-start whitespace-nowrap text-2xl font-bold text-black">
        bold
      </div>
      <div className="mt-6 flex w-[395px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Bold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">10px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">12px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black detail2-bold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="mt-8 self-start whitespace-nowrap text-2xl font-bold text-black">
        semibold
      </div>
      <div className="mt-6 flex w-[404px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">SemiBold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">10px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">12px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black detail2-semibold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:max-w-full max-md:mt-10 mt-12 self-start whitespace-nowrap text-2xl font-bold text-black">
        medium
      </div>
      <div className="max-md:flex-wrap mt-6 flex w-[455px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Medium</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">10px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">12px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black detail2-medium">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:text-4xl max-md:mt-10 mt-16 self-start whitespace-nowrap text-5xl font-bold text-black">
        detail3
      </div>
      <div className="mt-8 self-start whitespace-nowrap text-2xl font-bold text-black">
        bold
      </div>
      <div className="mt-6 flex w-[368px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Bold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">8px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">10px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black detail3-bold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:mt-10 mt-12 self-start whitespace-nowrap text-2xl font-bold text-black">
        semibold
      </div>
      <div className="mt-6 flex w-[365px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">SemiBold</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">8px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">10px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black detail3-semibold">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
      <div className="max-md:mt-10 mt-12 self-start whitespace-nowrap text-2xl font-bold text-black">
        medium
      </div>
      <div className="mt-6 flex w-[363px] max-w-full items-stretch gap-2 self-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-1">
            <div className="whitespace-nowrap text-sm text-black">
              Pretendard
            </div>
            <div className="whitespace-nowrap text-sm text-black">Medium</div>
          </div>
          <div className="max-md:justify-center mt-2 flex items-stretch gap-1">
            <div className="whitespace-nowrap text-sm text-black">8px</div>
            <div className="text-sm text-black">/</div>
            <div className="whitespace-nowrap text-sm text-black">10px</div>
          </div>
        </div>
        <div className="grow self-start whitespace-nowrap text-black detail3-medium">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
    </div>
  ),
};
