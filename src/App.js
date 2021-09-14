import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./compornents/atoms/button/PrimaryButton";
import { SecondaryButton } from "./compornents/atoms/button/SecondaryButton";
import { SearchInput } from "./compornents/molecules/SearchInput";
import { UserCard } from "./compornents/organisms/user/UserCard";
import { DefaultLayout } from "./compornents/templates/DefaultLayout";
import { HeaderOnly } from "./compornents/templates/HeaderOnly";
import "./styles.css";

const user = {
  name: "ゆま",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "12345@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
