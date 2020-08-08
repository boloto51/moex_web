using moex_web.DbContext;

namespace moex_web.Data.DbContext
{
    public interface IContextFactory
    {
        DataContext GetContext();
    }
}
