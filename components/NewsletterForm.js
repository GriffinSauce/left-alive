import { useForm } from 'react-hook-form';
import fetcher from '../utils/fetcher';
import Button from './Button';

const NewsletterForm = () => {
  const {
    handleSubmit,
    register,
    errors,
    setError,
    clearError,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = async (values) => {
    clearError('submit');
    try {
      await fetcher(`/api/newsletter-signup`, {
        method: 'POST',
        body: values,
      });
    } catch (err) {
      console.error(err);
      setError('submit');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-3">
          <p>
            <label htmlFor="name">
              <div className="text-left text-white label">Your name</div>
              <input
                id="name"
                className="text-center"
                type="text"
                name="name"
                placeholder="..."
                required=""
                ref={register({
                  required: 'please add your name',
                  pattern: {
                    value: /[a-z]+/i,
                    message: 'please add your name',
                  },
                })}
              />
            </label>
            {errors?.name?.message}
          </p>
          <p>
            <label htmlFor="email">
              <div className="text-left text-white label">Your email</div>
              <input
                id="email"
                className="text-center"
                type="email"
                name="email"
                placeholder="..."
                required=""
                ref={register({
                  required: 'please add your email',
                  pattern: {
                    value: /@/,
                    message: 'invalid email address',
                  },
                })}
              />
            </label>
            {errors?.email?.message}
          </p>
          <label style={{ display: 'none' }} htmlFor="hp">
            {`Leave this field empty if you're human: `}
            <input
              type="text"
              name="hp"
              defaultValue=""
              tabIndex="-1"
              autoComplete="off"
              ref={register()}
            />
          </label>
          <p>
            <Button type="submit" disabled={isSubmitting} center size="sm">
              Sign me up!
            </Button>
          </p>
          {errors.submit ? (
            <p className="text-sm">
              Something went wrong, please try again or send an email to
              <a href="mailto:mail@leftalive.nl">mail@leftalive.nl</a>
            </p>
          ) : null}
        </div>
      </form>
    </>
  );
};

export default NewsletterForm;
