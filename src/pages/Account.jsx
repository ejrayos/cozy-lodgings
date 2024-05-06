import Heading from "../ui/Heading";
import Wrapper from "../ui/Wrapper";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Wrapper>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm />
      </Wrapper>

      <Wrapper>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Wrapper>
    </>
  );
}

export default Account;
