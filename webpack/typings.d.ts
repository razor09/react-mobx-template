type Mode = 'development' | 'production';
type Name = 'local';

export interface Args {
  mode: Mode;
  name: Name;
}
