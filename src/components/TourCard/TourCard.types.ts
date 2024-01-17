interface IDataProps {
  id: string;
  name: string;
  description: string;
  image?: string;
  active?: boolean;
}

interface ITourCardProps {
  data: IDataProps;
  className?: string;
  titleClassName?: string;
}

export type { ITourCardProps, IDataProps };
