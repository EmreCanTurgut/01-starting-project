export default function Tabs({ children, buttons ,buttoncontainer}) {
  const Buttonscontainer=buttoncontainer;
  return (
    <>
      <Buttonscontainer>{buttons}</Buttonscontainer>
      {children}
    </>
  );
}
