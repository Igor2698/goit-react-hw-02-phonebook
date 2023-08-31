import css from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        {title && <h1 className={css.title}>{title}</h1>}

        {children}
      </div>
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
