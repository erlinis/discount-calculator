import { RefObject, useEffect } from "react";
import { useActionData, useNavigation } from "react-router";

export function useResetForm($form: RefObject<HTMLFormElement>) {
  const navigation = useNavigation();
  const actionData = useActionData();

  useEffect(
    function resetFormOnSuccess() {
      //@ts-expect-error
      if (navigation.state === "idle" && actionData?.ok) {
        $form.current?.reset();
      }
    },
    [navigation.state, actionData, $form]
  );
}
