import Image from 'next/image'

export function useMDXComponents(components) {
  return {
    ...components,
    // Map the built-in html elements to custom components
    img: (props) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <div className="my-8 flex justify-center">
        <Image
          {...props}
          width={700} // Provide a generous width, adjust as needed
          height={400} // Provide a generous height, adjust as needed
          className="h-auto object-cover max-w-[700px] rounded-lg"
        />
      </div>
    ),
  };
}
