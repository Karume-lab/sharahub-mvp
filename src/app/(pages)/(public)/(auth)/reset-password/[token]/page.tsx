interface ResetPasswordTokenPageProps {
  params: Promise<{ token: string }>;
}

const ResetPasswordTokenPage: React.FC<ResetPasswordTokenPageProps> = async ({
  params,
}) => {
  const { token } = await params;

  return <div>ResetPasswordTokenPage — Token: {token}</div>;
};

export default ResetPasswordTokenPage;
