import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-r from-blue-500 to-purple-500 font-[family-name:var(--font-geist-sans)]">
      
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-white text-center mb-8">
        Hello, Next.js!
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-8">
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEX///8AAABFRUVsbGz8/Pzl5eWzs7N2dnabm5uPj4/b29sxMTG9vb2YmJgiIiJaWlrU1NSAgIDy8vJnZ2erq6s4ODjr6+vLy8uGhobDw8MoKChRUVEJCQk/Pz9LS0uhoaETExMaGhq5e8eEAAADFElEQVR4nO3YfbdqQBjG4RGySRGF3uv7f8njMRRGu9NaxTlr/a4/9to0M81N84JSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgf5c7U/fggzaWkWaznc385sDZlUddp9TVH1WfhJ26u/1sto0C+TTq1xPbdfbFMHNr229+aVmWfQ8ztwxnt+65HCzyVtVMzhznVcW9WbFUX4hvhbFOsRnG+5sw6iJHh+BeMzmVx9dLda+dxSRhrO2u81Mzw1xXbbeo6ZBTSP+8pMniyX0p9KFzXtRu5dlb/f/e+3YY6xS205hhos28LWx6rzJbqi/roj9XKdv0dhdqOynjNUd5or5H/4q281YaM0zxdMoLDlJ9rpuSUbKIjTLS3uWTfX6qHhKLzaO/Zpj188u5k2Gykkkglv+s3Czil6d/PtrpZ5rxvX983VthnM1KpoRMudHjHnWNH6YcuM2pt8IotZbadqbngqEC44Y5V8PYWten3gyjZNgc90cZ/IPlxg3jOb5eA/SpgTCZ09ZrolpdqoE3vLqPG8Z2HF8ubH1lXy2aUb+NQC/2K3Miq4wdRjn+1WoWiVdhbKORaidgbZ5M4KOHUY7uUBS/DpP223C86rz3ZA85fhjZP9dpzDCLqM3vt7GsU/rDt2aKMGp+kx4d4p9jP4wdBy393dX82MzuQ6vMRGFUWA3kQ2SEKX6bmvOt3LtC/u4Hp4BpwpSPVtUFfmudcVP9C6t+pduhH9pEYfRVtt4Jo5eog6OS9eDkoKYLo+LZm2H0tCEN6M3Z0iwyWRgVRG+FyWWbaelnzZ3c1mtolJkuTD0GumHSPG4L7uX140zzsHKRhfcUqJ4Jw+g0v74DODWTsx4n3r26Hjb92zhlGJV5L8IcOi80zo+FP4mG1s5xw6S9b0+8v3s7E1azcfvZMpAhtOpt0orheeELdqmdLo1NffF4b5andk9a1PfCk48670JUWJ5K/e4eYVN+xfDe4NMS13XNDWKSdwr0ZLr/TiAHvQvhmuekhW++kwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+XX8AKxQkQDK4pI4AAAAASUVORK5CYII=" // Replace with your image path
          alt="Next.js Logo"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Footer */}
      <footer className="text-white text-center">
        <p>Made with ❤️ using Next.js</p>
      </footer>
    </div>
  );
}
