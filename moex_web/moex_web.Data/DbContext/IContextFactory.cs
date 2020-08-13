using moex_web.Data.DbContext;

namespace moex_web.Data.DbContext
{
    public interface IContextFactory
    {
        DataContext GetContext();
    }
}
