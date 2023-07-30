const Conditional = ({
	showWhen,
	children
}: {
	showWhen: Boolean;
	children: Node;
}) => {
	if(showWhen) return <>{children}</>;
	return <></>;
}