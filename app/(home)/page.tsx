import { FormComponent } from "./_components/form-component";
import { Header } from "./_components/header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <FormComponent />
    </div>
  );
}
