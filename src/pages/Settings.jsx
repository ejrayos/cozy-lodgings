import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Wrapper from "../ui/Wrapper";

function Settings() {
  return (
    <Wrapper>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Wrapper>
  );
}

export default Settings;
