import Sheet from '../_components/Sheet'

export const metadata = {
  title: 'お問い合わせ',
};

type Props = {
  children: React.ReactNode;
};

export default function Rootlayout({ children }: Props) {
  return (
    <Sheet>{children}</Sheet>
  )
}
