import Sheet from '../../_components/Sheet'

export const metadata = {
  title: '制作',
};

type Props = {
  children: React.ReactNode;
};

export default function Rootlayout({ children }: Props) {
  return (
    <Sheet>{children}</Sheet>
  )
}
